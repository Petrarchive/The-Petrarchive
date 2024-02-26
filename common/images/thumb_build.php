<?php

include './scripts/ImageResize.php';

$dir = __dir__ . './vat-lat3195-f/';
$thumb_dir = __dir__ . './foobar/';

$files = new FilesystemIterator($dir);
foreach ($files as $f) {
	if ($f->getFilename() !== 'Thumbs.db') {
		$file_name = $dir . $f->getFilename();
		$image = new \Eventviva\ImageResize($file_name);
		$image->scale(50);
		$image->save($thumb_dir . $file_name);
	}
}

?>