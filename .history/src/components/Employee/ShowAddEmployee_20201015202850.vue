<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>当前位置：员工管理</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">添加员工</a></el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 表单 -->
    <el-card>
      <el-form :model="addForm" :rules="addFormRules" ref="addFormRef">
        <el-row>
			<el-col :span="8">
				<el-form-item label="姓名" prop="name">
            <el-input v-model="addForm.name"></el-input>
          </el-form-item>
			</el-col>
          <el-col :span="8">
			  <el-form-item label="身份证号码" prop="IdNumber">
            <el-input v-model="addForm.IdNumber"></el-input>
          </el-form-item>
		  </el-col>
          
        </el-row>


		<el-row>
                <el-col :span="8">
                    <el-form-item label="活动名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="活动区域">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="活动名称1">
                        <el-input v-model="form.name1"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 添加表单对象
      addForm: {
        name: "",
        IdNumber: "",
      },
      // 添加表单校验规则对象
      addFormRules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        IdNumber: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
        ],
      },
    };
  },
};
</script>

<style lang="less" scoped>
.el-input {
  width: 250px;
}
</style>
