

<?php
$args = array(
    'numberposts' => 1,
    'order_by' => 'modified',
    "post_status" => "publish",
    "order" => "DESC",
    'post_type' => 'advertise_util');

$recent_posts = wp_get_recent_posts($args, ARRAY_A);
?>


<?php
foreach ($recent_posts as $recent) {
?>

<div class="col-sm-3" >
    <img src="<?php
    $meta_value = get_post_meta($recent['ID'], 'side_advertisment_one', true);
    echo $meta_value;
    ?>" alt="" class="img-responsive" style="width: 100%; height:200px;"/>
    <img src="<?php
    $meta_value = get_post_meta($recent['ID'], 'side_advertisment_two', true);
    echo $meta_value;
    ?>" alt="" class="img-responsive" style="width: 100%; height: 200px;"/>
    <img src="<?php
    $meta_value = get_post_meta($recent['ID'], 'side_advertisment_three', true);
    echo $meta_value;
    ?>" alt="" class="img-responsive" style="width: 100%; height: 200px;"/>
</div>

    <?php
}
?>