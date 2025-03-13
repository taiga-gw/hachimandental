<?php /* ファイルネームなども含め医院独自の情報は入れないでください*/ ?>
<meta name="viewport" content="width=device-width, user-scalable=yes, maximum-scale=1.0, minimum-scale=1.0">

<?php if ($page_build == "test") { ?>
<meta name="robots" content="noindex">

<?php } else{ ?>
<?php } ?>

<title><?php echo $page_title; ?></title>
<meta name="description" content="<?php echo $page_description; ?>">
<meta name="keywords" content="<?php echo $page_keywords; ?>">
<meta name="format-detection" content="telephone=no">
<meta http-equiv="Content-Style-Type" content="text/css" />
<meta http-equiv="Content-Script-Type" content="text/javascript" />
<meta property="og:title" content="<?php echo $page_title; ?>" />
<meta property="og:type" content="<?php echo $og_type; ?>" />
<meta property="og:url"
    content="<?php echo (empty($_SERVER['HTTPS']) ? 'http://' : 'https://'). $_SERVER['HTTP_HOST']. $_SERVER['REQUEST_URI']; ?>">

<link rel="canonical"
    href="<?php echo (empty($_SERVER['HTTPS']) ? 'http://' : 'https://'). $_SERVER['HTTP_HOST']. $_SERVER['REQUEST_URI']; ?>">

<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/styles.css?v=<?php echo date('YmdHis'); ?>">

<!-- ▼google font▼ -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
