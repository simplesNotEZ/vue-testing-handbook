import { mount } from "@vue/test-utils";
import ComponentWithGetters2 from "@/components/ComponentWithGetters2.vue";

describe("ComponentWithGetters2", () => {
  it("renders a username using a mock store", () => {
    const wrapper = mount(ComponentWithGetters2, {
      mocks: {
        $store: {
          getters: {
            fullname: "Alice Doe"
          }
        }
      }
    });

    expect(wrapper.find(".fullname").text()).toBe("Alice Doe");
  });

  // this will only work though if the getter is wrapped in a computed property in the actual component
  it.skip("renders a username using computed mounting option", () => {
    const wrapper = mount(ComponentWithGetters2, {
      computed: {
        fullname: () => "Alice Doe"
      }
    });

    expect(wrapper.find(".fullname").text()).toBe("Alice Doe");
  });
});
