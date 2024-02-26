<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:tei="http://www.tei-c.org/ns/1.0"
    exclude-result-prefixes="xs tei" version="2.0" xpath-default-namespace="http://www.tei-c.org/ns/1.0" xmlns="http://www.w3.org/2000/svg">

    <xsl:output method="xml" indent="yes" standalone="yes" doctype-public="-//W3C//DTD SVG 1.1//EN"
        doctype-system="http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" media-type="image/svg"/>


    <xsl:template match="/">
        <xsl:text>&#xa;</xsl:text>
        <svg version="1.1" viewBox="0 0 500 800">
            <xsl:attribute name="Description">
                <xsl:value-of select="/TEI/teiHeader[1]/fileDesc[1]/titleStmt[1]/title[1]"/>
            </xsl:attribute>
            <xsl:attribute name="id">
                <xsl:value-of
                    select="/TEI/teiHeader[1]/fileDesc[1]/sourceDesc[1]/msDesc[1]/@*[namespace-uri()='http://www.w3.org/XML/1998/namespace' and local-name()='id']"
                />
            </xsl:attribute>
            <xsl:apply-templates/>
        </svg>
    </xsl:template>

    <xsl:template match="lg">
        <xsl:text>&#xa;</xsl:text>
        <xsl:if test="@type= 'sestet'">
            <g>
                <xsl:attribute name="type">sestet</xsl:attribute>
                <xsl:apply-templates/>
            </g>
        </xsl:if>

        <xsl:if test="@type= 'sonnet'">
            <g>
                <xsl:attribute name="type">sonnet</xsl:attribute>
                <xsl:attribute name="n">
                    <xsl:value-of select="./@n"/>
                </xsl:attribute>
                <xsl:apply-templates/>
            </g>
        </xsl:if>

        <xsl:if test="@type= 'octave'">
            <g>
                <xsl:attribute name="type">octave</xsl:attribute>
                <xsl:apply-templates/>
            </g>
        </xsl:if>

        <xsl:if test="@corresp='#canvasline'">
            <xsl:text>&#xa;</xsl:text>
            <g corresp="canvasLine">
                <!--<xsl:attribute name="number">
                    <xsl:number count="*[@corresp = '#canvasline']" level="any"/>
                    </xsl:attribute>-->
                <xsl:variable name="x">
                    <xsl:number count="*[@corresp = '#canvasline']" level="any"/>
                </xsl:variable>
                <xsl:attribute name="y">
                    <xsl:value-of select="$x * 20"/>
                </xsl:attribute>
                <xsl:attribute name="lineNumber">
                    <xsl:number count="*[@corresp = '#canvasline']" level="any"/>
                </xsl:attribute>

                <!-- space @corresp = '#canvasline' -->
                <xsl:if test="name(.) = 'space'">
                    <xsl:text>      </xsl:text>
                    <rect>
                        <xsl:attribute name="width">110</xsl:attribute>
                        <xsl:attribute name="height">15</xsl:attribute>
                        <xsl:attribute name="x">0</xsl:attribute>
                        <xsl:attribute name="style">fill:rgba(200,200,255);</xsl:attribute>
                    </rect>
                </xsl:if>
                <!-- lg @corresp = '#canvasline' -->
                <xsl:if test="name(.) = 'lg'">
                    <xsl:if test="@type = 'dblvrs'">
                        <xsl:text>&#xa;</xsl:text>
                        <xsl:text>      </xsl:text>
                        <rect>
                            <xsl:attribute name="width">50</xsl:attribute>
                            <xsl:attribute name="height">15</xsl:attribute>
                            <xsl:attribute name="x">5</xsl:attribute>
                            <xsl:attribute name="fill">rgba(255,0,0)</xsl:attribute>
                            <xsl:variable name="number">
                                <xsl:number count="*[@corresp = '#canvasline']" level="any"/>
                            </xsl:variable>
                            <xsl:attribute name="number">
                                <xsl:value-of select="($number *2)-1"/>
                            </xsl:attribute>
                        </rect>
                        <xsl:text>&#xa;</xsl:text>
                        <xsl:text>      </xsl:text>
                        <rect>
                            <xsl:attribute name="width">50</xsl:attribute>
                            <xsl:attribute name="height">15</xsl:attribute>
                            <xsl:attribute name="x">60</xsl:attribute>
                            <xsl:attribute name="fill">rgba(255,0,0)</xsl:attribute>
                            <xsl:variable name="number">
                                <xsl:number count="*[@corresp = '#canvasline']" level="any"/>
                            </xsl:variable>
                            <xsl:attribute name="number">
                                <xsl:value-of select="$number *2"/>
                            </xsl:attribute>
                        </rect>
                    </xsl:if>
                </xsl:if>
                <xsl:apply-templates select="l/hi"/>
                <xsl:text>&#xa;</xsl:text>
            </g>
        </xsl:if>
    </xsl:template>

    <xsl:template match="teiHeader"> </xsl:template>

    <xsl:template match="l/hi[@rendition='#red #fs24pt']">
        <text x="0" y="0" font-family="Verdana" font-size="30" color="#red">
            <xsl:value-of select="."/>
        </text>
    </xsl:template>

    <xsl:template match="l/hi[@rendition='#blue #fs24pt']">
        <text x="0" y="0" font-family="Verdana" font-size="30" color="#blue">
            <xsl:value-of select="."/>
        </text>
    </xsl:template>

    <xsl:template match="l/hi[@rendition='#small-caps']" />

</xsl:stylesheet>
