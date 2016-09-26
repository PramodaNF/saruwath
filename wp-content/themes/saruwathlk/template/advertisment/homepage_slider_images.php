<div class="col-sm-5">
    <div class="row carousel-holder">

        <div class="col-md-12">
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>

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


                    <div class="carousel-inner">
                        <div class="item active">
                            <img class="slide-image"
                                 src="<?php
                                 $meta_value = get_post_meta($recent['ID'], 'first_slider_image', true);
                                 echo $meta_value;
                                 ?>"
                                 alt="">
                        </div>
                        <div class="item">
                            <img class="slide-image"
                                 src="<?php
                                 $meta_value = get_post_meta($recent['ID'], 'second_slider_image', true);
                                 echo $meta_value;
                                 ?>"
                                 alt="">
                        </div>
                        <div class="item">
                            <img class="slide-image"
                                 src="<?php
                                 $meta_value = get_post_meta($recent['ID'], 'third_slider_image', true);
                                 echo $meta_value;
                                 ?>"
                                 alt="">
                        </div>
                    </div>

                    <?php
                }
                ?>
                <!--                        <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">-->
                <!--                            <span class="glyphicon glyphicon-chevron-left"></span>-->
                <!--                        </a>-->
                <!--                        <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">-->
                <!--                            <span class="glyphicon glyphicon-chevron-right"></span>-->
                <!--                        </a>-->
            </div>
        </div>
    </div>
</div>