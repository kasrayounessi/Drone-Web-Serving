CREATE DATABASE IF NOT EXISTS lab5ece140a;

USE lab5ece140a;

CREATE TABLE IF NOT EXISTS Commands (
  id         int AUTO_INCREMENT PRIMARY KEY,
  message    VARCHAR(32) NOT NULL,
  completed  boolean DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS Telemetry;

-- CREATE TABLE Telemetry to store Telemetry data here
-- Call it "Telemetry"!!!