<template>
    <div>
        <!-- 导航 -->
	<table width="100%" border="0" cellpadding="0" cellspacing="0">
	  <tr><td height="10"></td></tr>
	  <tr>
	    <td width="15" height="32"><img src="../images/main_locleft.gif" width="15" height="32"></td>
		<td class="main_locbg font2"><img src="../images/pointer.gif">&nbsp;&nbsp;&nbsp;当前位置：文档管理 &gt; 文档查询</td>
		<td width="15" height="32"><img src="../images/main_locright.gif" width="15" height="32"></td>
	  </tr>
	</table>
	
	<table width="100%" height="90%" border="0" cellpadding="5" cellspacing="0" class="main_tabbor">
	  <!-- 查询区  -->
	  <tr valign="top">
	    <td height="30">
		  <table width="100%" border="0" cellpadding="0" cellspacing="10" class="main_tab">
		    <tr>
			  <td class="fftd">
			  	
				    <table width="100%" border="0" cellpadding="0" cellspacing="0">
					  <tr>
					    <td class="font3">
					    	标题：<input type="text" name="title" />
					    	<input type="submit"  value="搜索"/>
					    	<input type="button" id="delete" value="删除">
					    </td>
					  </tr>
					</table>
				
			  </td>
			</tr>
		  </table>
		</td>
	  </tr>
	  
	  <!-- 数据展示区 -->
	  <tr valign="top">
	    <td height="20">
		  <table width="100%" border="1" cellpadding="5" cellspacing="0" style="border:#c2c6cc 1px solid; border-collapse:collapse;">
		    <tbody><tr class="main_trbg_tit" align="center">
		      <td><input type="checkbox" id="checkAll"></td>
			  <td>标题</td>
			  <td>创建时间</td>
			  <td>创建人</td>
			  <td>描述</td>
			  	
			  <td>操作</td>
			  
			  <td>下载</td>
			</tr>
			
				<tr ondblclick="down(7);" class="main_trbg" align="center" id="data_0" style="background-color: rgb(255, 255, 255);">
					<td><input type="checkbox" id="box_0" value="7"></td>
					 <td>文件哈</td>
					 <td>
					  	2019年4月6日
					  </td>
					  <td>songyq</td>
					  <td>这是一个文件</td>
					  	
					 <td align="center" width="40px;"><a href="showUpdateDocument.html">
							<img title="修改" src="../images/update.gif"></a>
					  </td>
					  
					  <td align="center" width="40px;"><a href="#" id="down_7">
							<img width="20" height="20" title="下载" src="../images/downLoad.png"></a>
					  </td>
				</tr>
			
			 

		  </tbody></table>
		</td>
	  </tr>
	  <!-- 分页标签 -->
	  <tr valign="top"><td align="center" class="font3">
	  	   <table width="100%" align="center" style="font-size:13px;" class="flickr"><tbody><tr><td style="COLOR: #0061de; MARGIN-RIGHT: 3px; PADDING-TOP: 2px; TEXT-DECORATION: none"><span class="disabled">上一页</span><span class="current">1</span><span class="disabled">下一页</span>&nbsp;跳转到&nbsp;&nbsp;<input style="text-align: center;BORDER-RIGHT: #aaaadd 1px solid; PADDING-RIGHT: 5px; BORDER-TOP: #aaaadd 1px solid; PADDING-LEFT: 5px; PADDING-BOTTOM: 2px; MARGIN: 2px; BORDER-LEFT: #aaaadd 1px solid; COLOR: #000099; PADDING-TOP: 2px; BORDER-BOTTOM: #aaaadd 1px solid; TEXT-DECORATION: none" type="text" size="2" id="pager_jump_page_size">&nbsp;<input type="button" style="text-align: center;BORDER-RIGHT: #dedfde 1px solid; PADDING-RIGHT: 6px; BACKGROUND-POSITION: 50% bottom; BORDER-TOP: #dedfde 1px solid; PADDING-LEFT: 6px; PADDING-BOTTOM: 2px; BORDER-LEFT: #dedfde 1px solid; COLOR: #0061de; MARGIN-RIGHT: 3px; PADDING-TOP: 2px; BORDER-BOTTOM: #dedfde 1px solid; TEXT-DECORATION: none" value="确定" id="pager_jump_btn"></td></tr><tr align="center"><td style="font-size:13px;"></td></tr><tr><td style="COLOR: #0061de; MARGIN-RIGHT: 3px; PADDING-TOP: 2px; TEXT-DECORATION: none">总共<font color="red">1</font>条记录，当前显示1-1条记录。</td></tr></tbody></table>
	  </td></tr>
	</table>
	<div style="height:10px;"></div>
    </div>
</template>