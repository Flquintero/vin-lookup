import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import { createTestingPinia } from "@pinia/testing";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import VinLookupIndex from "@/views/vin-lookup/VinLookupIndex.vue";
import VinLookupSingle from "../views/vin-lookup/VinLookupSingle.vue";
import ResizeObserver from "../__mocks__/ResizeObserver";

describe("VinLookupIndex", () => {
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
          tabItems: ["Single Vin", "Bulk Vin", "Manual Vin"],
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

  it("initializes card component", () => {
    // Card Component that wraps everything
    const card = wrapper.findComponent(components.VCard);
    expect(card.exists()).toBe(true);
  });

  it("initializes card title with correct content", () => {
    const cardTitle = wrapper.findComponent(components.VCardTitle);
    expect(cardTitle.exists()).toBe(true);
    expect(cardTitle.text()).toBe("1. Add Vehicles");
  });

  it("initializes tabs component", () => {
    const tabs = wrapper.findComponent(components.VTabs);
    expect(tabs.exists()).toBe(true);
  });

  it("initializes all required tab components with content", () => {
    const tab = wrapper.findComponent(components.VTab);
    expect(tab.exists()).toBe(true);
    const allTabsRendered = wrapper.findAllComponents(components.VTab);
    expect(allTabsRendered.length).toBe(3);
    expect(allTabsRendered[0].text()).toMatch("Single Vin");
    expect(allTabsRendered[1].text()).toMatch("Bulk Vin");
    expect(allTabsRendered[2].text()).toMatch("Manual Vin");
  });

  it("initializes card text component with correct content", () => {
    const cardText = wrapper.findComponent(components.VCardText);
    expect(cardText.exists()).toBe(true);
    // Initial Dynamic Component content to be rendered
    const singleVin = wrapper.findComponent(VinLookupSingle);
    expect(singleVin.exists()).toBe(true);
  });
});
