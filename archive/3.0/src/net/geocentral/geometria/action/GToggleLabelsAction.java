/**
 * Copyright 2000-2010 Geometria Contributors
 * http://geocentral.net/geometria
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License
 * http://www.gnu.org/licenses
 */
package net.geocentral.geometria.action;

import net.geocentral.geometria.model.GDocument;
import net.geocentral.geometria.model.GFigure;
import net.geocentral.geometria.util.GDictionary;

import org.apache.log4j.Logger;

public class GToggleLabelsAction implements GUndoable {

    private String figureName;

    private static Logger logger = Logger.getLogger("net.geocentral.geometria");

    public boolean execute(GDocumentHandler documentHandler,
            boolean quietMode) {
        logger.info(quietMode);
        GDocument document = documentHandler.getActiveDocument();
        GFigure figure = document.getSelectedFigure();
        figureName = figure.getName();
        figure.toggleLabels();
        documentHandler.setDocumentModified(true);
        logger.info(figureName + ", " + figure.isLabelled());
        return true;
    }

    public void undo(GDocumentHandler documentHandler) {
        logger.info("");
        GDocument document = documentHandler.getActiveDocument();
        GFigure figure = document.getFigure(figureName);
        figure.toggleLabels();
        logger.info(figureName + ", " + figure.isLabelled());
    }

    public String getShortDescription() {
        return GDictionary.get("toggleLabels");
    }
}