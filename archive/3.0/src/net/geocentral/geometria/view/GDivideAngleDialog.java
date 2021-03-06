/**
 * Copyright 2000-2010 Geometria Contributors
 * http://geocentral.net/geometria
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License
 * http://www.gnu.org/licenses
 */
package net.geocentral.geometria.view;

import java.awt.Frame;

import javax.swing.BoxLayout;
import javax.swing.JDialog;
import javax.swing.JPanel;
import javax.swing.JTextField;
import javax.swing.WindowConstants;

import net.geocentral.geometria.action.GDivideAngleAction;
import net.geocentral.geometria.util.GDictionary;
import net.geocentral.geometria.util.GGraphicsFactory;
import net.geocentral.geometria.util.GRatioInputPane;
import net.geocentral.geometria.util.GGraphicsFactory.LocationType;

import org.apache.log4j.Logger;

public class GDivideAngleDialog extends JDialog implements GHelpOkCancelDialog {

    private int option = CANCEL_OPTION;

    private GDivideAngleAction action;

    private JTextField p0TextField;

    private JTextField p1TextField;

    private JTextField p2TextField;

    private GRatioInputPane ratioInputPane;

    private boolean result = false;

    private static Logger logger = Logger.getLogger("net.geocentral.geometria");

    public GDivideAngleDialog(Frame ownerFrame, GDivideAngleAction action,
            boolean enableRatioInput) {
        super(ownerFrame, true);
        logger.info(enableRatioInput);
        this.action = action;
        setDefaultCloseOperation(WindowConstants.DISPOSE_ON_CLOSE);
        setResizable(false);
        layoutComponents();
        ratioInputPane.setInputEnabled(enableRatioInput);
        pack();
        GGraphicsFactory.getInstance().setLocation(this, ownerFrame, LocationType.CENTER);
        setTitle(GDictionary.get("DivideAngle"));
    }

    private void layoutComponents() {
        logger.info("");
        getContentPane().setLayout(
                new BoxLayout(getContentPane(), BoxLayout.Y_AXIS));
        JPanel topPane = GGraphicsFactory.getInstance().createTitledBorderPane(
                GDictionary.get("ReferencePoints"));
        topPane.setLayout(new BoxLayout(topPane, BoxLayout.X_AXIS));
        p0TextField = GGraphicsFactory.getInstance().createLabelInput(null);
        JPanel leftInputPane = GGraphicsFactory.getInstance()
            .createContainerAdjustCenter(p0TextField);
        topPane.add(leftInputPane);
        JPanel centerInputPane = GGraphicsFactory.getInstance()
            .createImagePane("/images/DivideAngle.png");
        topPane.add(centerInputPane);
        p1TextField = GGraphicsFactory.getInstance().createLabelInput(null);
        p2TextField = GGraphicsFactory.getInstance().createLabelInput(null);
        JPanel rightInputPane = GGraphicsFactory.getInstance()
            .createContainerAdjustCenter(p1TextField, p2TextField, 45);
        topPane.add(rightInputPane);
        getContentPane().add(topPane);
        ratioInputPane = new GRatioInputPane(null, null);
        getContentPane().add(ratioInputPane);
        JPanel helpOkCancelPane = GGraphicsFactory.getInstance()
            .createHelpOkCancelPane(this,action.getHelpId());
        getContentPane().add(helpOkCancelPane);
    }

    public void prefill(String p0Label, String p1Label, String p2Label,
            String numeratorString, String denominatorString) {
        logger.info(p0Label + ", " + p1Label + ", " + p2Label + ", "
                + numeratorString + ", " + denominatorString);
        p0TextField.setText(p0Label);
        p1TextField.setText(p1Label);
        p2TextField.setText(p2Label);
        ratioInputPane.prefill(numeratorString, denominatorString);
    }

    public void ok() {
        logger.info("");
        action.setInput(p0TextField.getText().trim(), p1TextField.getText()
                .trim(), p2TextField.getText().trim(), ratioInputPane
                .getNumerator(), ratioInputPane.getDenominator());
        try {
            action.validateApply();
        }
        catch (Exception exception) {
            GGraphicsFactory.getInstance().showErrorDialog(
                    this, exception.getMessage());
            return;
        }
        option = OK_OPTION;
        result = true;
        dispose();
    }

    public void cancel() {
        logger.info("");
        dispose();
    }

    public int getOption() {
        return option;
    }

    public boolean getResult() {
        return result;
    }

    private static final long serialVersionUID = 1L;
}
