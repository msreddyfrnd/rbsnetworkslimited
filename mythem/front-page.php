
<?php get_header(); ?>

<section class="hero">
    <h1><?php the_field('hero_title'); ?></h1>
    <p><?php the_field('hero_subtitle'); ?></p>
</section>

<section>
    <h2>Services</h2>

    <?php if( have_rows('services') ): ?>
        <?php while( have_rows('services') ): the_row(); ?>
            <div class="card">
                <h3><?php the_sub_field('service_title'); ?></h3>
                <p><?php the_sub_field('service_desc'); ?></p>
            </div>
        <?php endwhile; ?>
    <?php endif; ?>

</section>

<?php get_footer(); ?>
