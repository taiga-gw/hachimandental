<?php 
$root_url = 'https://'. $_SERVER['HTTP_HOST'];
$root_url .= strstr($_SERVER['REQUEST_URI'], 'test/') ? '/test' : '' ;

global $webroot ;
$webroot = $_SERVER['DOCUMENT_ROOT'];
//現在のスラッグを取得 ※スラッグ名を出力したいとき echo $path_parts['filename'];
$path_parts = $_SERVER["HTTP_HOST"].$_SERVER["REQUEST_URI"];
//sp←→pc切分け
$ua = $_SERVER['HTTP_USER_AGENT'];

if ((strpos($ua, 'Android') !== false) && (strpos($ua, 'Mobile') !== false) || (strpos($ua, 'iPhone') !== false) || (strpos($ua, 'Windows Phone') !== false)) {
$is_sp = true;
}else{
$is_sp = false;
}
// ドメイン名
$mailDmain = "sample";

// 医院情報
$post = '〒000-0000';
$add = '〇〇市〇〇区〇〇00-00';
$call = '000-000-0000';
$email = '';
$open_weekdays = '10：00&nbsp;-&nbsp;13：00&nbsp;/&nbsp;14：30&nbsp;-&nbsp;19：00';
$close = '日・祝';
$gmap = '';
