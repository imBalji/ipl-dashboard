package com.learn.ipldashboard.repo;

import org.springframework.data.repository.CrudRepository;

import com.learn.ipldashboard.model.Team;

public interface TeamRepo extends CrudRepository<Team, Long>{
	
	Team findByTeamName(String teamName);
}