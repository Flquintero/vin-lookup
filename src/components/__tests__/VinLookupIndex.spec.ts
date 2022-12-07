import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import { createTestingPinia } from "@pinia/testing";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import VinLookupIndex from "@/views/vin-lookup/VinLookupIndex.vue";
import VinLookupSingle from "../views/vin-lookup/VinLookupSingle.vue";
import ResizeObserver from "../__mocks__/ResizeObserver";

describe("VinLookupIndex Implementation Test", () => {
  const vuetify = createVuetify({
    components,
    directives,
  });

  let wrapper: any = null;

  // SETUP - run before to each unit test
  beforeEach(() => {
    wrapper = mount(VinLookupIndex, {
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
  });

  // TEARDOWN - run after to each unit test
  afterEach(() => {
    wrapper.unmount();
  });

  it("initializes with correct components and content", () => {
    // Card Component that wraps everything
    const card = wrapper.findComponent(components.VCard);
    expect(card.exists()).toBe(true);

    // Card Title
    const cardTitle = wrapper.findComponent(components.VCardTitle);
    expect(cardTitle.exists()).toBe(true);
    expect(cardTitle.text()).toBe("1. Add Vehicles");

    // Tabs
    // Main Tabs Wrapper
    const tabs = wrapper.findComponent(components.VTabs);
    expect(tabs.exists()).toBe(true);
    // Single Tab Component
    const tab = wrapper.findComponent(components.VTab);
    expect(tab.exists()).toBe(true);
    const allTabsRendered = wrapper.findAllComponents(components.VTab);
    expect(allTabsRendered.length).toBe(3);
    expect(allTabsRendered[0].text()).toMatch("Single Vin");
    expect(allTabsRendered[1].text()).toMatch("Bulk Vin");
    expect(allTabsRendered[2].text()).toMatch("Manual Vin");

    // Card Body
    // Component that holds the Dynamic Component
    const cardText = wrapper.findComponent(components.VCardText);
    expect(cardText.exists()).toBe(true);
    // Initial Dynamic Component to be rendered
    const singleVin = wrapper.findComponent(VinLookupSingle);
    expect(singleVin.exists()).toBe(true);
  });
});
