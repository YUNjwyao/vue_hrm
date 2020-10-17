<template>
  <div class="employee">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>当前位置：员工管理</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">员工查询</a></el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 查询输入框 -->
    <el-card>
		职位：
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
	     姓名：
	   <el-input v-model="input"></el-input>
    </el-card>
  </div>
</template>

<script>
export default {
	data(){
		return {
			options: [{
          value: '选项1',
          label: '经理'
        }, {
          value: '选项2',
          label: '职员'
        }]
		}
	}
};
</script>

<style lang="less" scoped>

</style>
