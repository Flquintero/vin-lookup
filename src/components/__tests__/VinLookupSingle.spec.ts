import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import { createTestingPinia } from "@pinia/testing";
import { useVehiclesStore } from "@/stores/vehicles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import VinLookupSingle from "../views/vin-lookup/VinLookupSingle.vue";
import ResizeObserver from "../__mocks__/ResizeObserver";

describe("VinLookupSingle Implementation Test", () => {
  const vuetify = createVuetify({
    components,
    directives,
  });

  let wrapper: any = null;
  let store: any = null;

  // SETUP - run before to each unit test
  beforeEach(() => {
    wrapper = mount(VinLookupSingle, {
      data() {
        return {
          tab: 0,
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
    store = useVehiclesStore();
  });

  // TEARDOWN - run after to each unit test
  afterEach(() => {
    wrapper.unmount();
  });

  it("initializes with correct components and content", () => {
    // Description Paragraph
    const paragraphsRendered = wrapper.findAll("p");
    expect(paragraphsRendered.length).toBe(1);
    const topDescriptionParagraph = paragraphsRendered[0];
    expect(topDescriptionParagraph.text()).toBe(
      "Enter a VIN and we'll use our data partner to search for your vehicle"
    );

    // Text Field
    const vinLookupField = wrapper.findComponent(components.VTextField);
    expect(vinLookupField.exists()).toBe(true);
    expect(vinLookupField.props().label).toBe("Enter VIN");

    // Lookup Button
    const vinLookupButton = wrapper.findComponent(components.VBtn);
    expect(vinLookupButton.exists()).toBe(true);
    expect(vinLookupButton.props().disabled).toBe(true);
    expect(vinLookupButton.text()).toBe("LOOKUP VEHICLE");
  });
});
