import Vuex from "vuex";
import { createLocalVue, mount } from "@vue/test-utils";
import ComponentWithButtons from "@/components/ComponentWithButtons.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const mutations = {
  testMutation: jest.fn()
};

const store = new Vuex.Store({ mutations });

describe("ComponentWithButtons", () => {
  it("Real Vuex Store: commits a mutation when a button is clicked", async () => {
    const wrapper = mount(ComponentWithButtons, {
      store,
      localVue
    });

    await wrapper.find(".commit").trigger("click");

    // Vuex mutations are always called with two arguments: the first is the current state,
    // and the second is the payload. Since we didn't declare any state for the store, we
    // expect it be called with an empty object
    expect(mutations.testMutation).toHaveBeenCalledWith(
      {},
      { msg: "Test Commit" }
    );
  });
  // I'm not sure this is how one would "really" do this. I was doing my own riffin' here.
  // It does pass though.
  it("Mock Store: commits a mutation when a button is clicked", async () => {
    const wrapper = mount(ComponentWithButtons, {
      mocks: {
        $store: {
          commit: jest.fn()
        }
      }
    });

    await wrapper.find(".commit").trigger("click");

    expect(mutations.testMutation).toHaveBeenCalledWith(
      {},
      { msg: "Test Commit" }
    );
  });

  // use a mock store to dispatch an action; we mock the dispatch function itself
  it("dispatches an action when a button is clicked", async () => {
    const mockStore = { dispatch: jest.fn() };
    const wrapper = mount(ComponentWithButtons, {
      mocks: {
        $store: mockStore
      }
    });

    await wrapper.find(".dispatch").trigger("click");

    expect(mockStore.dispatch).toHaveBeenCalledWith("testAction", {
      msg: "Test Dispatch"
    });

    // Use a real Vuex store and a mocked dispatch method
    it("dispatch a namespaced action when button is clicked", async () => {
      const store = new Vuex.Store();
      store.dispatch = jest.fn();

      const wrapper = mount(ComponentWithButtons, {
        store,
        localVue
      });

      await wrapper.find(".namespaced-dispatch").trigger("click");

      expect(store.dispatch).toHaveBeenCalledWith(
        "namespaced/very/deeply/testAction",
        {
          msg: "Test Namespaced Dispatch"
        }
      );
    });
  });
});
