/**
 * showhide.js
 * 
 * Extremely simple and dependency-less javascript lib to show hide elements
 * according to simple rules. 
 * 
 * Author: Fernando Bevilacqua <dovyski@gmail.com>
 *  
 * Copyright (c) 2019 Fernando Bevilacqua
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
*/

var SH = {
    options: {

    },

    ready: function() {
        if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
            SH.init();
        } else {
            document.addEventListener("DOMContentLoaded", SH.init);
        }
    },

    init: function() {
        var aElements = document.querySelectorAll("*[data-sh-show], *[data-sh-hide], *[data-sh-toggle]");

        if(aElements.length == 0) {
            return;
        }

        aElements.forEach(e => {
            if(e.type == "select-one") {
                e.addEventListener("change", SH.handleOnChange);
                SH.handleOnChange({currentTarget: e});
            } else {
                e.addEventListener("click", SH.handleOnClick);
            }
        });
    },

    handleOnChange: function(theEvent) {
        var aElement = theEvent.currentTarget;
        var aValue = (aElement.value || aElement.options[aElement.selectedIndex].value);
        var aData = aElement.dataset;

        SH.handleOnClick({currentTarget: aElement});

        if(aData.shHideUsingValue) {
            SH.applyDisplayStyle(aValue, "none");
        }

        if(aData.shShowUsingValue) {
            SH.applyDisplayStyle(aValue, "block");
        }
    },

    handleOnClick: function(theEvent) {
        var aElement = theEvent.currentTarget;
        var aData = aElement.dataset;
 
        if(aData.shToggle) {
            SH.applyToggleDisplayStyle(aData.shToggle, aData.shToggleShow, aData.shToggleHide);
        }

        if(aData.shHide) {
            SH.applyDisplayStyle(aData.shHide, "none");
        }

        if(aData.shShow) {
            SH.applyDisplayStyle(aData.shShow, "block");
        }
    },

    addClass:function(theElement, theClass) {
        if (theElement.classList) {
            theElement.classList.add(theClass);
        } else {
            theElement.className += " " + theClass;
        }
    },

    removeClass:function(theElement, theClass) {
        if (theElement.classList) {
            theElement.classList.remove(theClass);
        } else {
            // TODO: implement this!
        }
    },

    applyDisplayStyle: function(theQuery, theDisplayStyle) {
        if(!theQuery) {
            return;
        }

        var aElements = document.querySelectorAll(theQuery);

        aElements.forEach(e => {
            e.style.display = theDisplayStyle;
        });
    },

    applyToggleDisplayStyle: function(theQuery, theShowQuery, theHideQuery) {
        if(!theQuery) {
            return;
        }

        var aShowQuery = theShowQuery || "";
        var aHideQuery = theHideQuery || "";
        var aElements = document.querySelectorAll(theQuery);

        aElements.forEach(e => {
            if(e.style.display == "none") {
                e.style.display = "block";
                SH.applyDisplayStyle(aShowQuery, "");
                SH.applyDisplayStyle(aHideQuery, "none");
            } else {
                e.style.display = "none";
                SH.applyDisplayStyle(aShowQuery, "none");
                SH.applyDisplayStyle(aHideQuery, "");
            }
        });
    },
};

SH.ready();
