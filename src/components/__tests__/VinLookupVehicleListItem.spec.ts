import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import { createTestingPinia } from "@pinia/testing";
import { useVehiclesStore } from "@/stores/vehicles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import VinLookupVehicleListItem from "../views/vin-lookup/partials/vin-lookup-vehicle-list/partials/VinLookupVehicleListItem.vue";
import ResizeObserver from "../__mocks__/ResizeObserver";
import { VinResponseObject } from "../__mocks__/VinResponseData";

describe("VinLookupVehicleListItem", () => {
  const vuetify = createVuetify({
    components,
    directives,
  });

  let wrapper: any = null;

  // SETUP - run before to each unit test
  beforeEach(() => {
    wrapper = mount(VinLookupVehicleListItem, {
      propsData: {
        vehicle: VinResponseObject,
        vehicleIndex: 0,
      },
      data() {
        return {
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
    wrapper?.unmount();
  });

  it("initializes an expansion panel component", () => {
    const listExpansionPanel = wrapper.findComponent(
      components.VExpansionPanel
    );
    expect(listExpansionPanel.exists()).toBe(true);
  });

  it("initializes an expansion panel title component with correct content", () => {
    const listExpansionPanelTitle = wrapper.findComponent(
      components.VExpansionPanelTitle
    );
    expect(listExpansionPanelTitle.exists()).toBe(true);
    // V
  });

  it("initializes an expansion panel text component with correct content", () => {
    const listExpansionPanelText = wrapper.findComponent(
      components.VExpansionPanelText
    );
    expect(listExpansionPanelText.exists()).toBe(true);
  });
});
