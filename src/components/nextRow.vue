<template>
	<div class="banner-row">
		<a href="//hotel.meituan.com" class="link" target="_blank"
			><div
				class="item pic-2 shadow"
				style="background-image:url(http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png"
			></div></a
		><a href="/jiaoyupeixun/?utm_source=MTPCmain-4" class="link" target="_blank"
			><div
				class="item pic-3 shadow"
				style="background-image:url(http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg"
			></div></a
		><a
			href="http://emis.meishi.meituan.com/merchantsSettled"
			class="link"
			target="_blank"
			><div
				class="item pic-4 shadow"
				style="background-image:url(http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg"
			></div
		></a>
		<div class="item download-app">
			<div class="qrcode-box">
				<img
					src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
					alt="下载APP"
				/>
			</div>
			<p class="app-name">美团APP手机版</p>
			<p class="sl">
				<span class="red">1元起</span><span class="gary">吃喝玩乐</span>
			</p>
		</div>
	</div>
</template>

<style scoped>
.banner-row{
    display: flex;
    padding-left: 10px;
}
.banner-row .pic-2,.banner-row .pic-3 {
    width: 270px;
    height: 165px;
    background-size: 270px;
    background-position: 50%;
    background-repeat: no-repeat;
    margin-top: 7px;
    margin-right: 10px;
}
.banner-row .pic-4 {
    width: 150px;
    height: 165px;
    margin-top: 7px;
    margin-right: 10px;
    background-size: 150px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #fff;
}
.download-app {
    text-align: center;
    width: 228px;
    height: 165px;
    padding:0 60px;
    margin-top: 7px;
    background-color: #fff;
    border: 1px solid #e5e5e5;
}
.banner-row .download-app .qrcode-box {
    margin: 7px auto 0 auto;
}
.qrcode-box img {
    width: 95px;
    height: 95px;
}
.banner-row .download-app .app-name {
    font-size: 16px;
    white-space:nowrap;
    color: #222222;
    font-weight: 500;
}
.banner-row .download-app .sl {
    font-size: 12px;
    font-weight: 500;
    margin-top: 2px;
}
.banner-row .download-app .red {
    color: #EC5330;
    margin-right: 5px;
}
.banner-row .download-app .gary {
    color: #3f3f3f;
}
</style>
