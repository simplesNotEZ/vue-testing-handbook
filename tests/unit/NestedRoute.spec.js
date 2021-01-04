import { shallowMount } from "@vue/test-utils";
import NestedRoute from "@/components/NestedRoute.vue";
import routes from "@/routes.js";

describe("NestedRoute", () => {
  it("renders a username from query string", () => {
    const username = "Alice";
    const wrapper = shallowMount(NestedRoute, {
      mocks: {
        $route: {
          params: { username }
        }
      }
    });

    expect(wrapper.find(".username").text()).toBe(username);
  });
});
