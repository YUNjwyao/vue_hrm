<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>当前位置：公告管理</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">添加公告</a></el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片区域 -->
    <el-card> 
		<el-row>
			<el-col :span="8">
				文档标题： 
				<el-input></el-input>
			</el-col>
		</el-row>
		文档描述： 
		<el-row>
			<el-col :span="16">
				<el-input class="area" type="textarea" value="这是一个文件"></el-input>
			</el-col>
		</el-row>

		
		
			<el-button>确定</el-button>
			<el-button>重置</el-button>
	
	</el-card>
  </div>
</template>

<script>
export default {
	
}
</script>

<style lang="less" scoped>
.el-input{
	width: 250px;
}
.area{
	margin-top: 20px;
	width: 500px;
	height: 300px;
}
</style>
