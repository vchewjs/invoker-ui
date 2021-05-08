<template>
  <div id="app">
    <div class="row">
    <in-button @click="handleClick" type='primary'>111</in-button>
    <in-button @click="handleClick" type='info'>111</in-button>
    <in-button type='success'>222</in-button>
    <in-button type='warning'>222</in-button>
    <in-button type='danger'>222</in-button>
    <in-button>333</in-button>
    </div>
    <div class="row">
    <in-button @click="handleClick" plain type='primary'>111</in-button>
    <in-button @click="handleClick" plain type='info'>111</in-button>
    <in-button type='success' plain>222</in-button>
    <in-button type='warning' plain>222</in-button>
    <in-button type='danger' plain>222</in-button>
    <in-button plain>333</in-button>
    </div>
    <!-- <div class="row">
    <in-button plain disabled icon='in-icon-delete' type='info'>111</in-button>
    <in-button plain disabled type='success'>222</in-button>
    <in-button plain>333</in-button>
    </div>
    <div class="row">
    <in-button round type='info'>111</in-button>
    <in-button round type='success'>222</in-button>
    <in-button round>333</in-button>
    </div>
    <div class="row">
    <in-button icon='in-icon-delete' circle type='info'></in-button>
    <in-button icon='in-icon-delete' circle type='success'></in-button>
    <in-button icon='in-icon-delete' circle></in-button>
    </div> -->
    <in-dialog title="sssss" :visible.sync="visible">
      12345555
      <template v-slot:footer>
        <in-button @click="dialogVisible = false">取 消</in-button>
        <in-button type="primary" @click="dialogVisible = false">确 定</in-button>
      </template>
    </in-dialog>
  </div>
</template>

<script>

export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    handleClick (e) {
      this.visible = true
    }
  }
}
</script>

<style lang="scss">
  .row {
    position: relative;
    box-sizing: border-box;
    margin-bottom: 20px;
    margin-right: 20px;
    color: #31c27c;
  }
</style>
