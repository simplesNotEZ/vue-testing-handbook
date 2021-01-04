import { mount } from "@vue/test-utils";
import SubmitButton from "@/components/SubmitButton.vue";

const msg = "submit";
const factory = otherProps => {
  return mount(SubmitButton, {
    propsData: {
      msg,
      ...otherProps
    }
  });
};

describe("SubmitButton", () => {
  it("displays a non-authorized message", () => {
    const wrapper = factory();

    console.log(wrapper.html());

    expect(wrapper.find("span").text()).toBe("Not Authorized");
    expect(wrapper.find("button").text()).toBe("submit");
  });

  it("displays an admin privileges message", () => {
    const wrapper = factory({ isAdmin: true });

    console.log(wrapper.html());

    expect(wrapper.find("span").text()).toBe("Admin Privileges");
    expect(wrapper.find("button").text()).toBe("submit");
  });
});
