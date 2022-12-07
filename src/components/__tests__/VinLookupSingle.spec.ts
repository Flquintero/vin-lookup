import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { useVehiclesStore } from "@/stores/vehicles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import VinLookupSingle from "../views/vin-lookup/VinLookupSingle.vue";
import ResizeObserver from "../__mocks__/ResizeObserver";

describe("VinLookupSingle", () => {
  const vuetify = createVuetify({
    components,
    directives,
  });

  let wrapper: any = null;

  // SETUP - run before to each unit test
  beforeEach(() => {
    wrapper = mount(VinLookupSingle, {
      data() {
        return {
          isSearching: false,
          vinNumber: "",
          vinLookupAlert: "",
          isShowingVinLookupAlert: false,
          vehicleResult: null,
          vehiclesStore: useVehiclesStore(),
        };
      },
      global: {
        plugins: [
          vuetify,
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              vehicles: {
                activeVehicles: [],
              },
            },
          }),
        ],
      },
      directives: {
        resize: ResizeObserver,
      },
    });
  });

  // TEARDOWN - run after to each unit test
  afterEach(() => {
    wrapper.unmount();
  });

  it("initializes a paragraph with description on top of component", () => {
    // Description Paragraph
    const paragraphsRendered = wrapper.findAll("p");
    expect(paragraphsRendered.length).toBe(1);
    const topDescriptionParagraph = paragraphsRendered[0];
    expect(topDescriptionParagraph.text()).toBe(
      "Enter a VIN and we'll use our data partner to search for your vehicle"
    );
  });

  it("initializes a text field with right label", () => {
    const vinLookupField = wrapper.findComponent(components.VTextField);
    expect(vinLookupField.exists()).toBe(true);
    expect(vinLookupField.props().label).toBe("Enter VIN");
  });

  it("initializes button that is disabled and has the corrent text", () => {
    const vinLookupButton = wrapper.findComponent(components.VBtn);
    expect(vinLookupButton.exists()).toBe(true);
    expect(vinLookupButton.props().disabled).toBe(true);
    expect(vinLookupButton.text()).toBe("LOOKUP VEHICLE");
  });
});
