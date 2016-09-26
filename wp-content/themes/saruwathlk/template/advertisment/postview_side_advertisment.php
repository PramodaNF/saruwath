

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

<div class="widget">
    <!--  <div class="advert1">
         <img src="images/14.jpg" alt="" class="img-responsive">
     </div> -->
    <div class="advert1 col-lg-12 col-md-6 col-sm-6 col-xs-12 hidden-xs hidden-sm hidden-md">


        <p>
            &nbsp;
        </p>

        <p>
        <img src="<?php
        $meta_value = get_post_meta($recent['ID'], 'first_side_advertisment', true);
        echo $meta_value;
        ?>" alt="" class="img-responsive" style="width: 100%; height:300px;"/>

        </p>

        <p>
            &nbsp;
        </p>

        <p>
            <img src="<?php
            $meta_value = get_post_meta($recent['ID'], 'second_side_advertisment', true);
            echo $meta_value;
            ?>" alt="" class="img-responsive" style="width: 100%; height:300px;"/>

        </p>

        <p>
            &nbsp;
        </p>



        <p>
            <img src="<?php
            $meta_value = get_post_meta($recent['ID'], 'third_side_advertisment', true);
            echo $meta_value;
            ?>" alt="" class="img-responsive" style="width: 100%; height:300px;"/>

        </p>

    </div>
</div>

    <?php
}
?>