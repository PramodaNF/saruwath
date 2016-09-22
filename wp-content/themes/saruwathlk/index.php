<?php
/*
  Template Name:Index
 */
get_header();

?>
<body>


<?php //require_once('template/navigation.php'); ?>
<!-- /.------------------------------End Menu---------------------------------------- -->


<div class="container-fluid">
    <div class="row">

        <!--        Slider Starts-->
        <?php require_once('template/advertisment/slider_images.php'); ?>
        <!--        Slider Ends-->


        <div class="col-sm-4">
            <div class="row text-center ">
                <div class="col-md-6 col-sm-6 hero-feature">
                    <div class="thumbnail">
                        <img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/img/news_icon.jpg" alt="">
                        <div class="caption">
                            <p>Lorem ipsum dolor sit amet,</p>
                            <p>
                                <a href="#" class="btn btn-primary">More</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-sm-6 hero-feature">
                    <div class="thumbnail">
                        <img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/img/news_icon.jpg" alt="">
                        <div class="caption">
                            <p>Lorem ipsum dolor sit amet,</p>
                            <p>
                                <a href="#" class="btn btn-primary">More</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-sm-6 hero-feature">
                    <div class="thumbnail">
                        <img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/img/news_icon.jpg" alt="">
                        <div class="caption">
                            <p>Lorem ipsum dolor sit amet,</p>
                            <p>
                                <a href="#" class="btn btn-primary">More</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-sm-6 hero-feature">
                    <div class="thumbnail">
                        <img src="<?php echo get_bloginfo('stylesheet_directory'); ?>/img/news_icon.jpg" alt="">
                        <div class="caption">
                            <p>Lorem ipsum dolor sit amet,</p>
                            <p>
                                <a href="#" class="btn btn-primary">More</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--        Side Advetisments Starts-->
        <?php require_once('template/advertisment/side_advertisment.php'); ?>
        <!--        Side Advetisments  Ends-->

    </div>
</div>

<!--Foreign Cinema Starts-->
<?php require_once('template/homepage/temp_foreign_cinema.php'); ?>
<!--Foreign Cinema Ends-->

<!--Gallery Starts-->
<?php require_once('template/homepage/temp_gallery.php'); ?>
<!--Gallery Ends-->

<!--Young Artists Starts-->
<?php require_once('template/homepage/temp_young_artists.php'); ?>
<!--Young Artists  Ends-->

<!--Hotty Girls Starts-->
<?php require_once('template/homepage/temp_hottygirls.php'); ?>
<!--Hotty Girls Ends-->

<!--Top Charts Starts-->
<?php require_once('template/homepage/temp_topcharts.php'); ?>
<!--Top Charts Ends-->

<!--footer start from here-->
<?php require_once('footer.php'); ?>
<!--footer end from here-->

<?php require_once('template/javascript.php'); ?>


</body>
</html>
