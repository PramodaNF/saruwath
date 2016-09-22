<div class="container-fluid"></div>
<div style="border-bottom-color: #ffffff" class="container bor">
    <div class="row" style="margin-top:10px; margin-bottom:10px">
        <div class="col-md-4">
            <a href="?page_id=5">
                <img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/img/saruwathlogo.png"
                     class="img-responsive" alt="logo">
            </a>
        </div>
        <div class="col-md-8">

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

                <div class="hidden-xs" style="float:unset">
                    <a style="  display: block;
                           height: auto;
                           max-width: 100% !important;" href="http://www.saaravita.lk/newsongs" target="_blank"><img
                            style="  display: block;
                                                                                       height: auto;
                                                                                       max-width: 100% !important;"
                            alt="saravita-anim" class="img-responsive"
                            src="<?php
                            $meta_value = get_post_meta($recent['ID'], 'header_advertisment', true);
                            echo $meta_value;
                            ?>"/></a>
                </div>

                <?php
            }
            ?>
        </div>
    </div> <!-- end of header -->


    <ul class="nav nav-pills nav-justified">
        <li class="active"><a href="?page_id=5">Home</a></li>
        <li><a href="?page_id=7">Hoty Girl</a></li>
        <li><a href="?page_id=11">News</a></li>
        <li><a href="?page_id=9">Foreign Cenema</a></li>
        <li><a href="?page_id=13">Gallery</a></li>
        <li><a href="?page_id=15">Young Artist</a></li>
        <li><a href="?page_id=17">Music Video</a></li>
    </ul>


    <div class="news magenta col-lg-12">
        <span>Latest News</span>
        <ul>
            <li><a href="#">Text 1 - Short Description </a></li>
            <li><a href="#">Text 2 - Short Description</a></li>
            <li><a href="#">Text 3 - Short Description</a></li>
            <li><a href="#">Text 4 - Short Description</a></li>
        </ul>
    </div>


</div>
