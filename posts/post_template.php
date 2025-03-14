<?php include 'includes/header.php'; ?>

<main class="PAGES_CONTAINER" id="PAGES_CONTAINER">
    <div id="POST_PAGES">
        <div class="head" style="background-image: url('<?php echo $post_image; ?>'); background-repeat: no-repeat; background-size: cover; background-attachment: fixed;">
            <div class="judul">
                <h2><?php echo $post_title; ?></h2>
            </div>
        </div>
        <div class="artikel">
            <div class="content">
                <?php echo $post_content; ?>
            </div>
        </div>
    </div>
</main>

<?php include 'includes/footer.php'; ?>