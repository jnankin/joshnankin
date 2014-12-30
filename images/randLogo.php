<?

    $logos = array(
        'coffee.png', 'nerd.png', 'code.png', 'whiskey.png',  'fax.png'
    );

    header('Content-type: image/png');
    readfile($logos[array_rand($logos)]);
?>
