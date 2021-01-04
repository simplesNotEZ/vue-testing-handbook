import { mount } from "@vue/test-utils";
import Greeting from "@/components/Greeting.vue";

describe("Greeting.vue", () => {
  it("renders a greeting", () => {
    const wrapper = mount(Greeting);

    console.log("wrapper.html():", wrapper.html());
    console.log("wrapper.text():", wrapper.text());
    
    expect(wrapper.text()).toMatch("Vue and TDD");
  });
});
