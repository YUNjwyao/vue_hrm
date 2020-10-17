<template>
    <div>
        <dl class="admin_login">
			<dt>
				<strong>CSI员工之家</strong><em></em> <strong>请把你的脸放摄像头面前</strong>
			</dt>
			<div id="media">
				<video id="video" width="100%" height="300" autoplay></video>
				<canvas id="canvas" width="530" height="300"></canvas>
			</div>
			<dd>
				<input type="button" onclick="query()" value="立即登录"
					class="submit_btn" />
			</dd>

		</dl>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
  body {
	height: 100%;
	background: #213838;
	overflow: hidden;
}

canvas {
	z-index: -1;
	position: absolute;
}
</style>