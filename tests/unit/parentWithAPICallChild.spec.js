import { shallowMount, mount } from "@vue/test-utils";
import ParentWithAPICallChild from "@/components/ParentWithAPICallChild.vue";
import ComponentWithAsyncCall from "@/components/ComponentWithAsyncCall.vue";

describe("ParentWithAPICallchild", () => {
  it.skip("renders with mount and does intialize API call", () => {
    const wrapper = mount(ParentWithAPICallChild);

    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  // replace the above test to stub the child component
  it("renders stubbed ComponentWithAsyncCall with mount and does initialize API call", () => {
    const wrapper = mount(ParentWithAPICallChild, {
      stubs: {
        ComponentWithAsyncCall: true
      }
    });

    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
