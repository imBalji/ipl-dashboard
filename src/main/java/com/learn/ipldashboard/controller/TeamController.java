package com.learn.ipldashboard.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.learn.ipldashboard.model.Match;
import com.learn.ipldashboard.model.Team;
import com.learn.ipldashboard.repo.MatchRepo;
import com.learn.ipldashboard.repo.TeamRepo;

@RestController
public class TeamController {
	
	private TeamRepo teamRepo;
	private MatchRepo matchRepo;
	
	
	public TeamController(TeamRepo teamRepo, MatchRepo matchRepo) {
		super();
		this.teamRepo = teamRepo;
		this.matchRepo = matchRepo;
	}
	
	@GetMapping("/teams/")
	public Iterable<Team> getAllTeams() {
		return this.teamRepo.findAll();
	}
	
	@GetMapping("/team/{teamName}")
	public Team getTeam(@PathVariable String teamName) {
		Team team = this.teamRepo.findByTeamName(teamName);
		team.setMatches(this.matchRepo.findLatestMatchesByTeam(teamName, 4));
		return team;
	}
	
	@GetMapping("/team/{teamName}/matches")
	public List<Match> getMatchesForTeam(@PathVariable String teamName, @RequestParam int year){
		LocalDate startDate = LocalDate.of(year, 1, 1);
		LocalDate endDate = LocalDate.of(year + 1, 1, 1);
//		return this.matchRepo.getByTeam1AndDateBetweenOrTeam2AndDateBetweenOrderByDateDesc(teamName, startDate, endDate, teamName, startDate, endDate);
		return this.matchRepo.getMatchesByTeamBetweenDates(teamName, startDate, endDate);
	}
}