<?
if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
	die();
?>
<!DOCTYPE html>
<html lang="ru">
	<head>
		<?$APPLICATION->ShowHead();?>
		<title><?$APPLICATION->ShowTitle();?></title>
		<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, minimal-ui">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="imagetoolbar" content="no">
		<meta name="msthemecompatible" content="no">
		<meta name="cleartype" content="on">
		<meta name="HandheldFriendly" content="True">
		<meta name="format-detection" content="telephone=no">
		<meta name="format-detection" content="address=no">
		<meta name="theme-color" content="#ffffff">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
		<link sizes="60x60" href="/apple-touch-icon-60x60.png" rel="apple-touch-icon">
		<link sizes="72x72" href="/apple-touch-icon-72x72.png" rel="apple-touch-icon">
		<link sizes="76x76" href="/apple-touch-icon-76x76.png" rel="apple-touch-icon">
		<link sizes="120x120" href="/apple-touch-icon-120x120.png" rel="apple-touch-icon">
		<link sizes="144x144" href="/apple-touch-icon-144x144.png" rel="apple-touch-icon">
		<link sizes="152x152" href="/apple-touch-icon-152x152.png" rel="apple-touch-icon">
		<link sizes="180x180" href="/apple-touch-icon-180x180.png" rel="apple-touch-icon">
		<link sizes="16x16" href="/favicon.ico" rel="icon">
		<link sizes="32x32" href="/favicon-32x32.png" rel="icon" type="image/png">
		<link sizes="192x192" href="/favicon-192x192.png" rel="icon" type="image/png">
		<link sizes="144x144" href="/android-chrome-144x144.png" rel="icon" type="image/png">
		<meta name="msapplication-tooltip" content="">
		<meta name="msapplication-square144x144logo" content="/mstile-144x144.png">
		<link href="/assets/styles/app.min.css" rel="stylesheet">
		
	</head>
	<body class="page">
		<?
		if (CUser::IsAuthorized()) {
		?>
		<div id="panel">
			<?$APPLICATION->ShowPanel();?>
		</div>
		<?
		}
		?>
		<div class="remodal-bg main-wrapper cl-text">
						