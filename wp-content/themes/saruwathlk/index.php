<?php
/*
  Template Name:Index
 */
get_header();

?>

<body style="border-left: 50px solid black; border-right: 50px solid black;">


<!-- /.------------------------------End Menu---------------------------------------- -->

<div style="width: 100%; height: 20px; background-color: white;"></div>

<div class="container-fluid">
    <div class="row">

        <!--        Slider Starts-->
        <?php require_once('template/advertisment/homepage_slider_images.php'); ?>
        <!--        Slider Ends-->

        <?php require_once('template/homepage/temp_latest_hottygirls.php'); ?>


        <!--        Side Advetisments Starts-->
        <?php require_once('template/advertisment/homepage_side_advertisment.php'); ?>
        <!--        Side Advetisments  Ends-->

    </div>
</div>


<!--News Starts-->
<?php require_once('template/homepage/temp_news.php'); ?>
<!--News Ends-->
<br>

<!--Gallery Starts-->
<?php require_once('template/homepage/temp_gallery.php'); ?>
<!--Gallery Ends-->
<br>

<!--Young Artists Starts-->
<?php require_once('template/homepage/temp_young_artists.php'); ?>
<!--Young Artists  Ends-->
<br>

<!--Music Video Starts-->
<?php require_once('template/homepage/temp_musicvideo.php'); ?>
<!--Music Video  Ends-->

<!--Top Charts Starts-->
<?php require_once('template/homepage/temp_topcharts.php'); ?>
<!--Top Charts Ends-->

<!--footer start from here-->
<?php require_once('footer.php'); ?>
<!--footer end from here-->
</body>
</html>
