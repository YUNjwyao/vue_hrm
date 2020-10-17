<template>
  <div class="employee">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>当前位置：员工管理</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">员工查询</a></el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 查询输入框 -->
    <el-card>
      <el-row>
        职位：
        <el-select v-model="value" placeholder="请选择职位">
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
        身份证号码：
        <el-input v-model="input"></el-input>
      </el-row>
	  <el-row>
        性别：
        <el-select v-model="value" placeholder="请选择性别">
          <el-option
            v-for="item in optionsSex"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        手机：
        <el-input v-model="input"></el-input>
       所属部门：
        <el-select v-model="value" placeholder="--部门选择--">
          <el-option
            v-for="item in optionsDoor"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
		<el-button>搜索</el-button>
		<el-button>删除</el-button>
      </el-row>
    </el-card>
	<!-- Table表格 -->
	<el-card>
		 <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
	</el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "经理",
        },
        {
          value: "选项2",
          label: "职员",
        },
	  ],
	  optionsSex: [
        {
          value: "选项1",
          label: "男",
        },
        {
          value: "选项2",
          label: "女",
        },
	  ],
	  optionsDoor: [
        {
          value: "选项1",
          label: "技术部",
        },
        {
          value: "选项2",
          label: "运营部",
        },
      ]
    };
  },
};
</script>

<style lang="less" scoped>
.el-input {
  width: 250px;
}
.el-row{
	margin-top: 10px;
}
.el-button{
	margin-left: 10px;
}
</style>
