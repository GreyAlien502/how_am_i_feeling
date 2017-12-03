.PHONY: all clean

all: how_am_i_feeling.xpi

how_am_i_feeling.xpi: general/* firefox/*
	cp general/* build
	cp firefox/* build
	zip -j how_am_i_feeling.xpi build/*

clean:
	rm -f *.xpi build/*
