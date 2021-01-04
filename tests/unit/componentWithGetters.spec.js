import { mount } from "@vue/test-utils";
import ComponentWithGetters from "@/components/ComponentWithGetters.vue";

describe("ComponentWithGetters", () => {
  it("renders a username using a mock store", () => {
    const wrapper = mount(ComponentWithGetters, {
      mocks: {
        $store: {
          state: { username: "alice" }
        }
      }
    });

    expect(wrapper.find(".username").text()).toBe("alice");
  });
});
