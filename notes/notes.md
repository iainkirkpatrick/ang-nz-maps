
census-maps notes:

ideally be able to serve this as a SPA up on iainkirkpatrick.me - for it to work properly with github pages though, the data will need to be sitting there in a file (i.e i downloaded and formatted it at some point). hopefully this is possible, it would be the easiest way to get away with not needing a backend database.

- maybe could use a SaaS database as a backend if necessary - someone that offers a trial for one app or something?
- kind of necessitates not much interactivity to the maps - i.e. swapping layers in and out. this is a restriction, but also an opportunity to be clever with design
- i.e. potentially detect where the user is located, and zoom the map extents to their location (given that is where they are most likely to be interested in).

data should probably be GEOJSON or even TOPOJSON to restrict data costs.

ideally put the shapefiles in a POSTGIS db, and run commands to do joins, spatial joins, ogr2ogr for format conversions etc.
then have makefiles for the most common operations. This would all just avoid the need to use GUI of QGIS for this stuff, plus good exp with spatial DB.
(but could still load layers from DB into QGIS if need be)

i like the notion of a SPA, long-scrolling - think some of the Mapbox demo pages, just keep scrolling for different maps with different data? fade-ins, fadeouts? how will long-scrolling work with large map divs, accidental zooming?

**sketch is up in my book**.

responsive design for this site could be tricky... text might have to scale quite small for narrow screens, or quite quickly seperate the map and text/data sections horizontally rather than vertically (i.e. stacked on top of each other rather than side by side.)


#SECTIONS

- population:
	- population change? population by itself is a bit boring mapped, most NZ'ers know where highly / lowly populated areas are.
	- choropleth, like Leaflet example
	- pop change over last two censuses?
	- different resolutions?
		- regional council
		- TA
		- CAU
	- layer selector for different area unit resolutions? Or just automatic as you zoom in / out?