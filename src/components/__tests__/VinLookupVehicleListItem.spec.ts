import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import { createTestingPinia } from "@pinia/testing";
import { useVehiclesStore } from "@/stores/vehicles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import VinLookupVehicleListItem from "../views/vin-lookup/partials/vin-lookup-vehicle-list/partials/VinLookupVehicleListItem.vue";
import ResizeObserver from "../__mocks__/ResizeObserver";

describe("VinLookupVehicleList", () => {
  const vuetify = createVuetify({
    components,
    directives,
  });

  let wrapper: any = null;
  let store: any = null;

  // SETUP - run before to each unit test
  beforeEach(() => {
    wrapper = mount(VinLookupVehicleListItem, {
      //   data() {
      //     return {
      //       tab: 0,
      //     };
      //   },
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

  it("initializes with correct components and content", () => {});
});
