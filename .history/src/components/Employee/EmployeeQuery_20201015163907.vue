<template>
    <div class="employee">
    <table width="100%" border="0" cellpadding="0" cellspacing="0">
  <tr><td height="10"></td></tr>
  <tr>
    <td width="15" height="32"><img src="../../assets/images/main_locleft.gif" width="15" height="32"></td>
	<td class="main_locbg font2"><img src="../../assets/images/pointer.gif">&nbsp;&nbsp;&nbsp;当前位置：员工管理  &gt; 添加员工</td>
	<td width="15" height="32"><img src="../../assets/images/main_locright.gif" width="15" height="32"></td>
  </tr>
</table>
<table width="100%" height="90%" border="0" cellpadding="5" cellspacing="0" class="main_tabbor">
  <tbody><tr valign="top">
    <td>
    	 
		 	<!-- 隐藏表单，flag表示添加标记 -->
    	 	<input type="hidden" name="flag" value="2">
		  <table width="100%" border="0" cellpadding="0" cellspacing="10" class="main_tab">
		    <tbody><tr><td class="font3 fftd">
		    	<table>
		    		<tbody><tr>
		    			<td class="font3 fftd">姓名：<input type="text" name="name" id="name" size="20"></td>
		    			<td class="font3 fftd">身份证号码：<input type="text" name="cardId" id="cardId" size="20"></td>
		    		</tr>
		    		<tr>
		    			<td class="font3 fftd">性别：
									<select name="sex" style="width:143px;">
					    			<option value="1">男</option>
					    			<option value="2">女</option>
					    		</select></td>
		    			<td class="font3 fftd">职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位：
		    			 <select name="job_id" style="width:143px;">
					    			
					    				<option value="1">职员</option>
					    			
					    				<option value="2">Java开发工程师</option>
					    			
					    				<option value="3">Java中级开发工程师</option>
					    			
					    				<option value="4">Java高级开发工程师</option>
					    			
					    				<option value="5">系统管理员</option>
					    			
					    				<option value="6">架构师</option>
					    			
					    				<option value="7">主管</option>
					    			
					    				<option value="8">经理</option>
					    			
					    				<option value="9">总经理</option>
					    			
					    		</select>
					    </td>
		    		</tr>
		    		<tr>
		    			<td class="font3 fftd">学历：<input name="education" id="education" size="20"></td>
		    			<td class="font3 fftd">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：<input name="email" id="email" size="20"></td>
		    		</tr>
		    		<tr>
		    			<td class="font3 fftd">手机：<input name="phone" id="phone" size="20"></td>
		    			<td class="font3 fftd">电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话：<input name="tel" id="tel" size="20"></td>
		    		</tr>
		    		
		    	</tbody></table>
		    </td></tr>
			<tr><td class="main_tdbor"></td></tr>
			
			<tr>
				<td class="font3 fftd">
					政治面貌：<input name="party" id="party" size="40">&nbsp;&nbsp;
					QQ&nbsp;&nbsp;号码：<input name="qqNum" id="qqNum" size="20">
				</td>
			</tr>
			<tr><td class="main_tdbor"></td></tr>
			
			<tr>
				<td class="font3 fftd">
					联系地址：<input name="address" id="address" size="40">&nbsp;&nbsp;
					邮政编码：<input name="postCode" id="postCode" size="20">
				</td>
			</tr>
			<tr><td class="main_tdbor"></td></tr>
			
			<tr>
				<td class="font3 fftd">
					出生日期：<input cssclass="Wdate" onfocus="WdatePicker({skin:'whyGreen',dateFmt:'yyyy-MM-dd'});" name="birthday" id="birthday" size="40">&nbsp;&nbsp;
					民&nbsp;&nbsp;&nbsp;&nbsp;族：<input name="race" id="race" size="20">
				</td>
			</tr>
			<tr><td class="main_tdbor"></td></tr>
			
			<tr>
				<td class="font3 fftd">
					所学专业：<input name="speciality" id="speciality" size="40">&nbsp;&nbsp;
					爱&nbsp;&nbsp;&nbsp;&nbsp;好：<input name="hobby" id="hobby" size="20">
				</td>
			</tr>
			<tr><td class="main_tdbor"></td></tr>
			
			<tr>
				<td class="font3 fftd">
					备&nbsp;&nbsp;&nbsp;&nbsp;注：<input name="remark" id="remark" size="40">
					&nbsp;&nbsp;所属部门：
					<select name="dept_id" style="width:100px;">
						   
			    				<option value="1">技术部</option>
			    			
			    				<option value="2">运营部</option>
			    			
			    				<option value="3">财务部</option>
			    			
			    				<option value="5">总公办</option>
			    			
			    				<option value="6">市场部</option>
			    			
			    				<option value="7">教学部</option>
			    			
					</select>
				</td>
			</tr>
			<tr><td class="main_tdbor"></td></tr>
			
			<tr><td align="left" class="fftd">
			<input type="button" onclick="submit()" value="添加">&nbsp;&nbsp;<input type="reset" value="取消 "></td></tr>
		  </tbody></table>
		 
	</td>
  </tr>
</tbody>
</table>
<div style="height:10px;"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
   <link href="../css/css.css" type="text/css" rel="stylesheet" />
</style>
