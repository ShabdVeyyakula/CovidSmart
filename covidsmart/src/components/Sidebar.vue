<template>
    <div class="wrapper" style="position: fixed">
        <div class="sidebar" data-color="purple" style="position: fixed">

 

    	<div class="sidebar-wrapper">
            <p style="padding-top: 10px; margin-left: -40%">CovidSmart</p>

            <ul class="nav">
                <li >
                    <a href="dashboard.html">
                        <i class=""></i>
                        <center>
                            <router-link :to="{name: 'Dashboard'}" style="color: white">
                                <p>Dashboard</p>
                            </router-link>
                        </center>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i class=""></i>
                        <router-link :to="{name: 'Maps'}" style="color: white">
                            <p>Maps </p>
                        </router-link>
                        
                    </a>
                </li>
                
               
                <li>
                    <a href="">
                        <i class=""></i>
                        <router-link :to="{name: 'Logs'}" style="color: white">
                            <p>Armed Log</p>
                        </router-link>
                        
                    </a>
                </li>
                
                
				
            </ul>
    	</div>
    </div>
    </div>
</template>

<script>

export default {

    name: 'Sidebar',
    
    data() {
        return {

        }
    }
    
}
</script>

<style>
.sidebar .nav a,
.table > tbody > tr .td-actions .btn {
    -webkit-transition: all 150ms ease-in;
    -moz-transition: all 150ms ease-in;
    -o-transition: all 150ms ease-in;
    -ms-transition: all 150ms ease-in;
    transition: all 150ms ease-in;
}

    
.sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    right: auto;
    left: 0;
    width: 290px;
    display: block;
    z-index: 1;
    color: #fff;
    font-weight: 200;
    background-size: cover;
    background-position: center center;
}

.sidebar .sidebar-wrapper {
    position: relative;
    max-height: calc(100vh - 75px);
    min-height: 100%;
    overflow: auto;
    width: 290px;
    z-index: 4;
    padding-bottom: 100px;
}

.sidebar .sidebar-background {
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
    display: block;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center center;
}

.sidebar .logo {
    padding: 10px 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.sidebar .logo p {
    float: left;
    font-size: 20px;
    margin: 10px 10px;
    color: #FFFFFF;
    line-height: 20px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.sidebar .logo .simple-text {
    text-transform: uppercase;
    padding: 5px 0px;
    display: block;
    font-size: 18px;
    color: #FFFFFF;
    text-align: center;
    font-weight: 400;
    line-height: 30px;
}

.sidebar .logo-tim {
    border-radius: 50%;
    border: 1px solid #333;
    display: block;
    height: 61px;
    width: 30px;
    float: left;
    overflow: hidden;
}

.sidebar .logo-tim img {
    width: 60px;
    height: 60px;
}

.sidebar .nav {
    margin-top: 20px;
    float: none;
}

.sidebar .nav .open > a,
.sidebar .nav li.dropdown .dropdown-menu li:hover > a,
.sidebar .nav li:hover > a {
    background-color: rgba(255, 255, 255, 0.13);
    opacity: 1;
}

.sidebar .nav li > a {
    color: #FFFFFF;
    margin: 5px 30px;
    opacity: .86;
    border-radius: 4px;
    display: block;
}

.sidebar .nav li.active > a {
    color: #FFFFFF;
    opacity: 1;
    background: rgba(255, 255, 255, 0.23);
}

.sidebar .nav li.separator {
    margin: 15px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.sidebar .nav li.separator + li {
    margin-top: 31px;
}

.sidebar .nav p {
    margin: 0;
    line-height: 30px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    margin-left: 45px;
}

.sidebar .nav i {
    font-size: 28px;
    float: left;
    margin-right: 15px;
    line-height: 30px;
    width: 30px;
    text-align: center;
}

.sidebar .nav .caret {
    margin-top: 13px;
    position: absolute;
    right: 30px;
}

.sidebar .logo {
    padding: 10px 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.sidebar .logo p {
    float: left;
    font-size: 20px;
    margin: 10px 10px;
    color: #FFFFFF;
    line-height: 20px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.sidebar .logo .simple-text {
    text-transform: uppercase;
    padding: 5px 0px;
    display: block;
    font-size: 18px;
    color: #FFFFFF;
    text-align: center;
    font-weight: 400;
    line-height: 30px;
}

.sidebar .logo-tim {
    border-radius: 50%;
    border: 1px solid #333;
    display: block;
    height: 61px;
    width: 61px;
    float: left;
    overflow: hidden;
}

.sidebar .logo-tim img {
    width: 60px;
    height: 60px;
}

.sidebar:after, .sidebar:before {
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
}

.sidebar:before {
    opacity: .33;
    background: #000000;
}

.sidebar:after {
    background: #787878;
    background: -moz-linear-gradient(top, #787878 0%, #343434 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #787878), color-stop(100%, #343434));
    background: -webkit-linear-gradient(top, #787878 0%, #343434 100%);
    background: -o-linear-gradient(top, #787878 0%, #343434 100%);
    background: -ms-linear-gradient(top, #787878 0%, #343434 100%);
    background: linear-gradient(to bottom, #787878 0%, #343434 100%);
    background-size: 150% 150%;
    z-index: 3;
    opacity: 1;
}

.sidebar[data-image]:after, .sidebar.has-image:after {
    opacity: .77;
}

.sidebar[data-color="blue"]:after {
    background: #1F77D0;
    background: -moz-linear-gradient(top, #1F77D0 0%, #533ce1 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #1F77D0), color-stop(100%, #533ce1));
    background: -webkit-linear-gradient(top, #1F77D0 0%, #533ce1 100%);
    background: -o-linear-gradient(top, #1F77D0 0%, #533ce1 100%);
    background: -ms-linear-gradient(top, #1F77D0 0%, #533ce1 100%);
    background: linear-gradient(to bottom, #1F77D0 0%, #533ce1 100%);
    background-size: 150% 150%;
}

.sidebar[data-color="azure"]:after {
    background: #1DC7EA;
    background: -moz-linear-gradient(top, #1DC7EA 0%, #4091ff 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #1DC7EA), color-stop(100%, #4091ff));
    background: -webkit-linear-gradient(top, #1DC7EA 0%, #4091ff 100%);
    background: -o-linear-gradient(top, #1DC7EA 0%, #4091ff 100%);
    background: -ms-linear-gradient(top, #1DC7EA 0%, #4091ff 100%);
    background: linear-gradient(to bottom, #1DC7EA 0%, #4091ff 100%);
    background-size: 150% 150%;
}

.sidebar[data-color="green"]:after {
    background: #87CB16;
    background: -moz-linear-gradient(top, #87CB16 0%, #6dc030 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #87CB16), color-stop(100%, #6dc030));
    background: -webkit-linear-gradient(top, #87CB16 0%, #6dc030 100%);
    background: -o-linear-gradient(top, #87CB16 0%, #6dc030 100%);
    background: -ms-linear-gradient(top, #87CB16 0%, #6dc030 100%);
    background: linear-gradient(to bottom, #87CB16 0%, #6dc030 100%);
    background-size: 150% 150%;
}

.sidebar[data-color="orange"]:after {
    background: #FFA534;
    background: -moz-linear-gradient(top, #FFA534 0%, #ff5221 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #FFA534), color-stop(100%, #ff5221));
    background: -webkit-linear-gradient(top, #FFA534 0%, #ff5221 100%);
    background: -o-linear-gradient(top, #FF7070 0%, #ff5221 100%);
    background: -ms-linear-gradient(top, #FF7070 0%, #ff5221 100%);
    background: linear-gradient(to bottom, #FF7070 0%, #ff5221 100%);
    background-size: 150% 150%;
}

.sidebar[data-color="red"]:after {
    background: #FF7070;
    background: -moz-linear-gradient(top, #FF7070 0%, #FF7070 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #FB404B), color-stop(100%, #FF7070));
    background: -webkit-linear-gradient(top, #FF7070 0%,#36393f
 100%);
    background: -o-linear-gradient(top,#36393f
 0%,#36393f 100%);
    background: -ms-linear-gradient(top,#36393f
 0%,#36393f 100%);
    background: linear-gradient(to bottom,#36393f
 0%, #9C6DFF
 100%);
    background-size: 150% 150%;
}

.sidebar[data-color="purple"]:after {
    background: #36393f
;
    background: -moz-linear-gradient(top,#36393f
 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#36393f
), color-stop(100%, #36393f
));
    background: -webkit-linear-gradient(top, #36393f
 0%, #36393f
 100%);
    background: -o-linear-gradient(top, #36393f
 0%,#36393f
 100%);
    background: -ms-linear-gradient(top,#36393f
 0%,#36393f
 100%);
    background: linear-gradient(to bottom, #36393f
 0%,#36393f

 100%);
    background-size: 150% 150%;
}

@media (min-width: 992px){
    .typo-line{
        padding-left: 140px;
        margin-bottom: 40px;
        position: relative;
    }

    .typo-line .category{
        transform: translateY(-50%);
        top: 50%;
        left: 0px;
        position: absolute;
    }
}

.all-icons [class*="pe-"]{
    font-size: 40px;
}
.all-icons input{
    border: 0;
}
.all-icons .font-icon-detail{
    text-align: center;
    padding: 45px 0px 30px;
    border: 1px solid #e5e5e5;
    border-radius: 6px;
    margin: 15px 0;
}
.all-icons .font-icon-detail input{
    margin: 25px auto 0;
    width: 100%;
    text-align: center;
    display: block;
    color: #aaa;
    font-size: 13px;
}

#map{
    position:relative;
    width:100%;
    height: calc(100% - 60px);
}

.places-buttons .btn{
    margin-bottom: 30px
}
.sidebar .nav > li.active-pro{
    position: absolute;
    width: 100%;
    bottom: 10px;
}
.sidebar .nav > li.active-pro a{
    background: rgba(255, 255, 255, 0.14);
    opacity: 1;
    color: #FFFFFF;
}

.table-upgrade td:nth-child(2),
.table-upgrade td:nth-child(3){
    text-align: center;
}

@media all and (max-width: 991px)  {
    .sidebar .nav > li.active-pro{
        position: initial;
    }
}



</style>

<style src="@/assets/css/sb-admin-2.min.css">