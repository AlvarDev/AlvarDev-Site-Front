<template>
  <div
    :class="{'question-input d-flex align-start justify-center pb-5 flex-column': true,}"
  >
    <div class="question-input-container d-flex align-start justify-center fillWidth flex-column">
      <v-textarea
        ref="question-input-textfield"
        v-model="question"
        :placeholder="'Em que posso ajudar?'"
        :readonly="false"
        class="question-input-textfield"
        variant="solo"
        rows="1"
        hide-details
        auto-grow
        @keydown.enter.prevent="handleKeyDown"
      >

        <template #append>
          <slot name="submit">
            <v-btn
              :loading="false"
              :style="{ opacity: 1, cursor: 'pointer' }"
              class="send-button"
              icon="mdi-send-variant"
              elevation="0"
              @click="handleSubmit()"
            />
          </slot>

        </template>
      </v-textarea>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data () {
    return {
      loading: false,
      question: '',
    }
  },

  methods: {
    handleKeyDown (event: KeyboardEvent) {
      if (event.ctrlKey || event.shiftKey) {
        // this.$emit('update:model-value', this.modelValue + '\n')
        return
      }

      this.handleSubmit()
    },

    handleSubmit () {
      if (this.question) {
        console.log(this.question)
      }
      else {
        console.log("No question found")
      }
    },
  },
}
</script>

<style lang="scss">
  textarea {
    overflow: hidden;
  }
  .question-input {
    width: 70%;
    max-width: 800px;
    padding-top: 18px;
    transform: translateX(35px);
    height: 10%;
    position: relative;

    .question-input-container {
      width: 100%;
      position: absolute;
      bottom: 10px;
    }

    .send-button {
      position: absolute;
      top: 1%;
      transform: translateX(-55px);
      z-index: 100000;
    }
  }

  .question-input-textfield {
    width: 100%;

    > .v-input__control .v-field {
      border-radius: 10px !important;
      max-height: 250px !important;
      overflow-y: scroll !important;
      padding-right: 48px;
    }

    .v-field__append-inner, .v-input__append {
      padding-top: 10px !important;
      padding-bottom: 10px !important;
      align-items: flex-end !important;
    }

    .v-input__append {
      margin-left: 0 !important;
    }
  }
</style>
