import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import { createTestingPinia } from "@pinia/testing";
import { useVehiclesStore } from "@/stores/vehicles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import VinLookupVehicleList from "../views/vin-lookup/partials/vin-lookup-vehicle-list/VinLookupVehicleList.vue";
import ResizeObserver from "../__mocks__/ResizeObserver";

describe("VinLookupVehicleList", () => {
  const vuetify = createVuetify({
    components,
    directives,
  });

  let wrapper: any = null;

  // SETUP - run before to each unit test
  beforeEach(() => {
    wrapper = mount(VinLookupVehicleList, {
      data() {
        return {
          openListItems: null,
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

  it("initializes paragraphs with correct content", () => {
    const paragraphsRendered = wrapper.findAll("p");
    expect(paragraphsRendered.length).toBe(2);
    const topDescriptionParagraph = paragraphsRendered[0];
    expect(topDescriptionParagraph.text()).toBe(
      "To make changes to the vehicles below, expand the row of the vehicle you wish to edit"
    );
    const activeVehiclesCount = paragraphsRendered[1];
    expect(activeVehiclesCount.text()).toContain("ACTIVE VEHICLES");
    expect(activeVehiclesCount.text()).toContain(
      wrapper.vm.$data.vehiclesStore.activeVehicles.length
    );
  });
});
