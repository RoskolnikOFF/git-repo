(function(ctx) {
	$('.rubric-set .rubric__button', ctx).click(function(e) {
		$(this).parent().hide();
		$('.rubric-setup', ctx).show();
	});
	$('.rubric-setup .button', ctx).click(function(e) {
		runCore.cookie('geo_v5', 1, {
			"expires": 30
		});
		$(this).parent().hide();
		$('.rubric-set', ctx).show();
	});
	$('#new_geotarget_selector', ctx).click(function(e) {
		e.preventDefault();
		runCore.cookie('geo_v5', 1, {
			"expires": 30
		});
		runCore.modal_geotarget($(this).attr("data-geocode"));
		return false;
	});
	if (!runCore.cookie('geo_v5')) {
		$('.rubric-set .rubric__button', ctx).click();
	}
})('#geo_news_block');

