import Emitter from "@/components/Emitter.vue";
import { mount } from "@vue/test-utils";

describe("Emitter", () => {
  it("emits an event with two arguments", () => {
    const wrapper = mount(Emitter);

    wrapper.vm.emitEvent();

    console.log("wrapper.emitted(): ", wrapper.emitted());
    console.log("wrapper.emitted().crazyEvent: ", wrapper.emitted().crazyEvent);
  });
});
