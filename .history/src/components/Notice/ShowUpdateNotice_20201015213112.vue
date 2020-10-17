<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>当前位置：公告管理</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">修改公告</a></el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片区域 -->
    <el-card> 
		<el-row>
			<el-col :span="8">
				公告标题： 
				<el-input value="参加会议通知"></el-input>
			</el-col>
		</el-row>
			<el-row>
			<el-col :span="16">
				公告内容： 
				<el-input type="textarea"></el-input>
			</el-col>
		</el-row>
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
</style>
