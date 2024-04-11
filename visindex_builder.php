<?php

$dir = __DIR__ . '/images/visindex/';

$meta_file = file_get_contents('charta-meta.json');
$meta = json_decode($meta_file, true);

$contents_dir = __DIR__ . '/content/';

$fn = fopen('vizindex.html', 'w') or die("can't open file");
$textindex = fopen('textindex-2.html', 'w') or die("can't open file");

$files = new DirectoryIterator($dir);

foreach ($files as $f) {
    if (!$f->isDot()) {
        $img_name = $f->getFilename();

    	if (explode(".", $img_name)[1] !== 'svg') {
    		return;
    	}

        // remove .svg
        $exploded_file_name = explode(".", $img_name)[0];
        $charta = substr($exploded_file_name, 1);

        if (file_exists($contents_dir . $exploded_file_name . '.xml')) {
            writeHtml($exploded_file_name, $img_name, $charta);
            continue;
        }

        if (array_key_exists($charta, $meta)) {
            $charta_meta = $meta[$charta];

            if (array_key_exists('document', $charta_meta)) {
                writeHtml($charta_meta['document'], $img_name, $charta );
                continue;
            } 

            writeHtml(null, $img_name, $charta);
            continue;
        } 


        writeHtml(null, $img_name, $charta); 
    }
}

function writeHtml($file, $img, $charta) {
    global $fn;
    global $textindex;

    $html = '<a ';
    $html .= 'data-charta="' . $charta . '"' . ' class="col-4 col-sm-3 col-md-1 col-lg-1-24';
    if (!$file) {
        $html .= ' no-file';
        $html .= '" href="content/charta-404.xml?incomplete=true&';
        $html .= 'ch=' . $charta . '">';
    } else {
        $html .= '" href="content/' . $file . '.xml';

        if ($charta) {
            $html .= '#c' . $charta;
        }
        
        $html .= '">';
    }

    // handle textindex write //
        fwrite($textindex, $html . '</a>');
    // end textindex write //

    $html .= '<img alt="';
    $html .= $charta;
    $html .= '" class="vi-img';
    $html .= '" data-src="images/visindex/';
    $html .= $img . '" /></a>' . "\n";

    fwrite($fn, $html);
}

fclose($fn); fclose($textindex);
?>
