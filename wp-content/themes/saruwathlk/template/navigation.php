<div class="container-fluid"></div>
<div style="border-bottom-color: #ffffff" class="container bor">
    <div class="row" style="margin-top:10px; margin-bottom:10px;background-color: #000000">
        <div class="col-md-4">
            <a href="?page_id=5">
                <img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/img/saruwathlogo2.png"
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

                <div class="hidden-xs" style="float:unset;padding-top: 30px">
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


    <ul id="navigation" class="nav nav-pills nav-justified">
        <li style="font-family: navfont;font-size: 16px"><a href="?page_id=5">HOME</a></li>
        <li style="font-family: navfont;font-size: 16px"><a href="?page_id=7">HOTTY GIRL</a></li>
        <li style="font-family: navfont;font-size: 16px"><a href="?page_id=11">NEWS</a></li>
        <li style="font-family: navfont;font-size: 16px"><a href="/cinema">FOREIGN CINEMA</a></li>
        <li style="font-family: navfont;font-size: 16px"><a href="/gallary">GALLERY</a></li>
        <li style="font-family: navfont;font-size: 16px"><a href="?page_id=15">YOUNG ARTIST</a></li>
        <li style="font-family: navfont;font-size: 16px"><a href="?page_id=17">MUSIC VIDEO</a></li>
    </ul>


    <div class="news magenta col-lg-12">
        <span>Latest News</span>
        <ul>
            <?php
            $args = array(
                'posts_per_page' => 6,
                'post_type' => 'custom_post',
                'order' => "DESC",
                'category_name' => 'news'
            );
            $recent_posts = wp_get_recent_posts($args, ARRAY_A);
            ?>

            <?php
            foreach ($recent_posts as $recent) {
                $i = $recent['ID'];
                ?>

                <li>
                    <?php
                    echo '<a href="' . get_permalink($i) . '">' . get_the_title($i) . '</a>';
                    ?>
                </li>


                <?php
            }
            ?>
        </ul>
    </div>


</div>
