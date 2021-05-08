<template>
  <button class="in-button" :class="[`in-button--${type}`, {
      'is-plain':plain,
      'is-round':round,
      'is-circle':circle,
      'is-disabled':disabled
  }]"
  :disabled="disabled"
  @click="handleClick">
  <div class="mask" v-if="disabled"></div>
  <i v-if="icon" :class="icon"></i>
  <span v-if="$slots.default">
      <slot></slot>
    </span></button>
</template>

<script>
export default {
  name: 'InButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created () {
    console.log(this.type)
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.in-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &+.in-button {
    margin-left: 10px;
  }
  &:hover,
  &:focus {
    color: #31c27c;
    border-color: #31c27c;
    background-color: #e7fdf3;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: #fff;
    border-color: #31c27c;
    color: #31c27c;
  }
  &--primary {
    color: #fff;
    border-color: #3ece89;
    background-color: #3ece89;
    &:hover,
    &:focus {
      border-color: #65c496;
      background-color: #65c496;
      color: #fff;
    }
    &.is-plain {
      color: #3ece89;
      background: #e8fff1;
      border-color: #3ece89;
      &:hover,
      &:focus {
        background: #3ece89;
        border-color: #3ece89;
        color: #fff;
      }
    }
  }
  &--success {
    color: #fff;
    background-color: #35C613;
    border-color: #35C613;
    &:hover,
    &:focus {
      background: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }
    &.is-plain {
      color: #35C613;
      background: #f0f9eb;
      border-color: #c2e7b0;
      &:hover,
      &:focus {
        background: #35C613;
        border-color: #35C613;
        color: #fff;
      }
    }
  }
  &--info {
    color: #fff;
    background-color: #61affe;
    border-color: #61affe;
    &:hover,
    &:focus {
      background: #87c2fd;
      border-color: #87c2fd;
      color: #fff;
    }
    &.is-plain {
      color: #61affe;
      background: #e1effd;
      border-color: #61affe;
      &:hover,
      &:focus {
        background: #61affe;
        border-color: #61affe;
        color: #fff;
      }
    }
  }
  &--warning {
    color: #fff;
    background-color: #fca130;
    border-color: #e6a23c;
    &:hover,
    &:focus {
      background: #ebb563;
      border-color: #ebb563;
      color: #fff;
    }
    &.is-plain {
      color: #fca130;
      background: #fdf6ec;
      border-color: #f5dab1;
      &:hover,
      &:focus {
        background: #fca130;
        border-color: #fca130;
        color: #fff;
      }
    }
  }
  &--danger {
    color: #fff;
    background-color: #f93e3e;
    border-color: #f93e3e;
    &:hover,
    &:focus {
      background: #f78989;
      border-color: #f78989;
      color: #fff;
    }
    &.is-plain {
      color: #f93e3e;
      background: #fef0f0;
      border-color: #fbc4c4;
      &:hover,
      &:focus {
        background: #f93e3e;
        border-color: #f93e3e;
        color: #fff;
      }
    }
  }
  // 圆角
  &.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }
  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
  // 禁用
// &.is-disabled .mask {
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(148, 146, 146, 0.39);
//   left: 0;
//   top: 0;
//   box-shadow: 2px 2px 3px rgba(216, 213, 213, 0.3);
//   border-radius: 4px;
//   z-index: 100;
// }
// &.is-round .mask {
//   border-radius: 20px;
// }
// &.is-circle .mask {
//   border-radius: 50%;
// }
}
.in-button [class*=in-icon]+span {
    margin-left: 5px;
}
</style>
