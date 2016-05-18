<?php 

if(empty($_POST)){
	exit("ERROR");
}

$data = $_POST;

//指定图片路径
$src = 'mail.png';
//获取图片信息
$info = getimagesize($src);
//获取图片扩展名
$type = image_type_to_extension($info[2],false);
//动态的把图片导入内存中
$fun = "imagecreatefrom{$type}";
$image = $fun($src);
//指定字体颜色
$col = imagecolorallocatealpha($image,255,255,255,50);
$col = imagecolorallocate($image, 0, 0, 0);
$col1 = imagecolorallocate($image, 140, 140, 140);

//指定字体内容
$name = trim($data['name']);
$job = trim($data['job']);

$company = trim($data['company']);
$phone = "联系电话：".trim($data['phone']);
$email = "email：".trim($data['email']);
$addr = "地址：".trim($data['addr']);
//给图片添加文字

imagettftext ($image , 15 , 0 , 140 , 50 , $col, 'msyhl.ttc' , $name);
imagettftext ($image , 12 , 0 , 190 + strlen($name) * 3, 50 , $col, 'msyhl.ttc' , $job);
imagettftext ($image , 9 , 0 , 140 , 90 , $col1, 'msyh.ttc', $company);
imagettftext ($image , 9 , 0 , 140 , 110 , $col1, 'msyh.ttc' , $phone);
imagettftext ($image , 9 , 0 , 140 , 130 , $col1, 'msyh.ttc' , $email);
imagettftext ($image , 9 , 0 , 140 , 150 , $col1, 'msyh.ttc' , $addr);
//动态的输出图片到浏览器中
$func = "image{$type}";

$filename=  "./images".date("/YmdHis").".".pathinfo($src, PATHINFO_EXTENSION);

$ii = $func($image,$filename);
//销毁图片
imagedestroy($image);

header('Content-type: image/png'); 
header("Content-Disposition: attachment; filename=$filename"); //注意：header函数前确保没有任何输出
echo file_get_contents($filename);//写入图片信息

exit;