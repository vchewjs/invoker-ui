# Dialog 组件

## 基本用法

<script>
export default {
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    btnClick() {
      this.dialogVisible = true
    }
  }
};
</script>

<div style="margin-top: 10px;">
  <in-button type="primary" @click="btnClick">PRIMARY</in-button>
  <in-dialog title="sssss" :visible.sync="dialogVisible">
      12345555
      <template v-slot:footer>
        <in-button @click="dialogVisible = false">取 消</in-button>
        <in-button type="primary" @click="dialogVisible = false">确 定</in-button>
      </template>
    </in-dialog>
</div>
